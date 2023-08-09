CarrierWave.configure do |config|
  config.asset_host = Rails.env.production? ? 'https://meatup-iqzc.onrender.com' : 'http://localhost:5000'
  config.storage = :file
  config.cache_storage = :file
end
