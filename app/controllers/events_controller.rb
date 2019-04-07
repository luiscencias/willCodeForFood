class EventsController < ApplicationController

  skip_before_action :verify_authenticity_token

  # GET /events
  def index

    if params[:show] == 'later'
      @events = Event.later_events
    elsif params[:page] != nil
      @events = Event.all_events_ordered.page(params[:page]).per(10)
    else
      @events = Event.all_events_ordered
    end
    render json: @events # returns all events; default action for component to retrieve data; consider ordering by date
  end

  # GET /events/1
  def show
    id = params[:id]
    @event = Event.find(id)

    if params[:registered_members]

      render json: @event.members
    else
      render json: @event
    end
  end
  
  def create # create new event
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    @event = Event.find(params[:id])

    if ((mem_id = params[:member_id]) != nil) # changes member registration status
      @member = Member.find(mem_id)

      puts "mem_id: #{mem_id}"
      if params[:register] && !@event.members.exists?(mem_id)
        @event.members << @member
      end

      if params[:deregister] && @event.members.exists?(mem_id)
        @event.members.delete(@member)
      end

    end

    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event = Event.find(params[:id])
    @event.destroy
  end

  def event_params
    params.permit(:title, :date, :start_time, :end_time, :details, :location)
  end

end
