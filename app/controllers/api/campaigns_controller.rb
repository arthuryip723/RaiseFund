class Api::CampaignsController < ApplicationController
  def index
    @campaigns = Campaign.all
  end

  def show
    begin
      @campaign = Campaign.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: {:error => "Not found"}, status: 404 if !@campaign
    end
  end
end
