class FnamesController < ApiController
  before_action :set_fname, only: [:show, :update, :destroy]

  # GET /fnames
  def index
    @fnames = Fname.all

    render json: @fnames
  end

  # GET /fnames/1
  def show
    render json: @fname
  end

  # POST /fnames
  def create
    @fname = Fname.new(fname_params)

    if @fname.save
      render json: @fname, status: :created, location: @fname
    else
      render json: @fname.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /fnames/1
  def update
    if @fname.update(fname_params)
      render json: @fname
    else
      render json: @fname.errors, status: :unprocessable_entity
    end
  end

  # DELETE /fnames/1
  def destroy
    @fname.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fname
      @fname = Fname.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def fname_params
      params.require(:fname).permit(:lname, :email, :subject)
    end
end
