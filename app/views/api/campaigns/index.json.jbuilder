# json.array! @campaigns, :id, :name
@campaigns.each do |campaign|
  json.set! campaign.id do
    json.extract! campaign, :id, :name
  end
end