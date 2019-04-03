class EventsController < ApplicationController

  # GET /events
  def index

    if params[:show] == 'later'
      @events = Event.later_events
    else
      page = params[:page] || 1
      @events = Event.all.paginate(page: params[:page], per_page: 10)
    end

    render json: @events  # returns all events; default action for component to retrieve data; consider ordering by date

  end

  # GET /events/1
  def show
    id = params[:id]
    @event = Event.find(id)
    # will render app/views/movies/show.<extension> by default
    render json: @event # show specific event/ (perhaps a stretch)
  end

  def later

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
    params.require(:event).permit(:title, :date, :start_time, :end_time, :details, :location)
  end

end
