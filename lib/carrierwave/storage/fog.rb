CarrierWave.configure do |config|
  config.fog_credentials = {
    provider:              'AWS',
    aws_access_key_id:     'AKIA24VCKNIR6HNBO2B5',
    aws_secret_access_key: 'NO7RRqg+3RCgTC/PT7oID2CT4uvu5o1U9M60oMZ2',
    use_iam_profile:       true,
    region:                'eu-west-1',
    host:                  's3.example.com',
    endpoint:              'https://s3.example.com:8080'
  }
  config.fog_directory  = 'name_of_bucket'
  config.fog_public     = false
  config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }
end
