class Api::V1::CharitiesController < ApiController

  def index
    render json: Charity.all
  end

  def show
    charity = Charity.find(params[:id])
    render json: charity
  end


  # private
  # def location_params
  #   params.require(:charity).permit(:name, :address, :city, :state, :zip, :password_protected)
  # end
end
