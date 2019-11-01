class Api::V1::EventsController < ApiController
  def index
    render json: Event.all.sort_by { |event| event.event_date }
  end

  def show
    event = Event.find(params[:id])
    charity = Event.find(params[:id]).charity
    render json: {
      event: event,
      charity: charity
    }
  end

  def create
    charity = Charity.all
    new_event = Event.new(event_params)
    if new_event.save
      render json: {
        new_event: new_event,
        charity: charity
      }
    else
      render json: {'errors': new_event.errors.full_messages}
    end
  end


  private
  def event_params
    params.require(:event).permit(:name, :description, :event_date, :start_time, :end_time, :venue, :address, :city, :state, :zip, :venue_website, :event_page, :event_photo, :charity_id)
  end
end
