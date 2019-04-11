class EventsController < ApplicationController

  skip_before_action :verify_authenticity_token

  # GET /events
  def index

    proxy = Event.all

    if params[:page] != nil && params[:page_no] != nil  # select page and number per page
      page = params[:page]
      page_no = params[:page_no]

      proxy = proxy.page(page).per(page_no)
    end

    if params[:show] != nil # select whether events shown are earlier or later
      show = params[:show]

      if show == 'earlier'
        proxy = proxy.earlier_events
      elsif show == 'later'
        proxy = proxy.later_events
      end

    end

    if params[:order] != nil  # select whether events are ascending or descending by date
      order = params[:order]

      if order == 'desc'
        proxy = proxy.descending
      elsif order == 'asc'
        proxy = proxy.ascending
      end

    end

    render json: proxy # returns all events; default action for component to retrieve data; consider ordering by date
  end

  # GET /events/1
  def show
    id = params[:id]
    @event = Event.find(id)

    if params[:registered_members]
      render json: @event.members
    else
      response = {event: @event, members: @event.members}
      render json: response
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
