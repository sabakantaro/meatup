CarrierWave.configure do |config|
  config.asset_host = ENV.fetch('RAILS_ENV') == 'production' ? 'https://meatup-iqzc.onrender.com' : 'http://localhost:5000'
  config.storage = :file
  config.cache_storage = :file
end
