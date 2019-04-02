class EventsController < ApplicationController

  # GET /events
  def index
    @events = Event.all
    render json: @events  # returns all events; default action for component to retrieve data; consider ordering by date
  end

  # GET /events/1
  def show
    render json: @event # show specific event/ (perhaps a stretch)
  end
  
  
  def new # create new event
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  def event_params
    #params.require(:event).permit(:email, :password, :password_confirmation, :first_name, :last_name)
    params.permit(:title, :date, :start_time, :end_time, :details, :location)

  end

end
