require 'sinatra'
require_relative 'config/application'

set :bind, '0.0.0.0'  # bind to all interfaces

enable :sessions

get '/' do
  redirect '/projects'
end

get '/projects' do
  @projects = Project.all

  erb :'index'
end

get '/projects/:id' do
    @users = Project.find(params[:id]).users
    @project = Project.find(params[:id])
    erb :'show'
  end
