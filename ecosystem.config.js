
module.exports = {

    apps: [{
      script: 'dist/src/main.js',
      name: "NotificationService",
      instances: "2",
      cron_restart: '1 1 * * *',
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development"
      },
      env_local: {
        NODE_ENV: "local",
      },
      env_dev: {
        NODE_ENV: "dev",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }],
  

    deploy: {
  
      local: {
  
        "host": ["localhost"],
        "ref": "origin/master",
        "repo": `https://gitlab+deploy-token-509262:JGhetBnT3hsGdesxY6Ea@gitlab.com/emamhasan1137/GpsDeviceLocation.git`,
        "path": "/Users/hello/Gps/Deploy/TestDeploy",
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env local'
      },
  
      production: {      
        "user": "ubuntu",
        "host": ["54.251.141.105"],
        "port": "4826",
        "ref": "origin/master",
        "repo": `https://gitlab+deploy-token-875568:H9ZP8PzFZzVRrz8quUr7@devops.trucklagbe.com/tl-back/tl_notification_service.git`,
        "path": "/home/TL/NotificationService",
        'post-deploy': 'npm install && sudo pm2 startOrRestart ecosystem.config.js --env production'
      },
  
      dev : {
        
         "user" : "shepherd",
         "host" : ["103.199.168.135"],
         "port":"5363",
         "ref"  : "origin/master",
         "repo" : `https://gitlab+deploy-token-875568:H9ZP8PzFZzVRrz8quUr7@devops.trucklagbe.com/tl-back/tl_notification_service.git`,
         "path" : "/home/TL/trucklagbe_account",
         'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env dev'
      },
      qa : {
         "user" : "custodian",
         "host" : ["103.199.168.130"],
         "port":"3716",
         "ref"  : "origin/master",
         "repo" : `https://gitlab+deploy-token-875568:H9ZP8PzFZzVRrz8quUr7@devops.trucklagbe.com/tl-back/tl_notification_service.git`,
         "path" : "/home/custodian/TL/NotificationService",
         'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env dev'
      }
  
    }
  };
  
