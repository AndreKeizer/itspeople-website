module.exports = {
  apps: [{
    name: 'itspeople-website',
    script: 'npm start',
    cwd: '/Users/nikki/.openclaw/workspace/itspeople-website',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    restart_delay: 4000,
    max_restarts: 10
  },
  {
    name: 'itspeople-intranet-demo',
    script: 'npx serve -l 64608',
    cwd: '/Users/nikki/.openclaw/workspace/itspeople-intranet-demo',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    restart_delay: 2000,
    max_restarts: 10
  }]
}