class EventsController < ApplicationController

  # GET /events
  def index

    if params[:show] == 'later'
      @events = Event.later_events
    else
      page = params[:page] || 1
      @events = Event.all.paginate(page: params[:page], per_page: 10)
    end
    render json: @events.to_json  # returns all events; default action for component to retrieve data; consider ordering by date
  end

  # GET /events/1
  def show
    id = params[:id]
    @event = Event.find(id)
    render json: @event.to_json # show specific event/ (perhaps a stretch)
  end
  
  def create # create new event
    @event = Event.new(event_params)

    if @event.save
      render json: @event.to_json, status: :created, location: @event
    else
      render json: @event.errors.to_json, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render json: @event.to_json
    else
      render json: @event.errors.to_json, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event = Event.find(params[:id])
    @event.destroy
  end

  def event_params
    params.require(:event).permit(:title, :date, :start_time, :end_time, :details, :location)
  end

end
