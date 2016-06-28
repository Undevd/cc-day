// include gulp
var gulp = require('gulp'),
	nodemon = require('nodemon');

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development',
			'REGISTRATION_INBOX': 'scott.hulme@civica.co.uk',
			'SPARKPOST_API_KEY': 'd6962ef4aacbcb5a9b69a4d0afb853d4acde312f',
			'SPARKPOST_API_URL': 'https://api.sparkpost.com/api/v1',
			'SPARKPOST_SANDBOX_DOMAIN': 'sparkpostbox.com',
			'SPARKPOST_SMTP_HOST': 'smtp.sparkpostmail.com',
			'SPARKPOST_SMTP_PASSWORD': 'd6962ef4aacbcb5a9b69a4d0afb853d4acde312f',
			'SPARKPOST_SMTP_PORT': '587',
			'SPARKPOST_SMTP_USERNAME': 'SMTP_Injection',
            'MONGODB_DBNAME': 'ccdayregistration',
            'MONGODB_PWD': 'Pa$$w0rd',
            'MONGODB_UNAME': 'admin'}
  });
});

// Default task(s): start the server
gulp.task('default', ['start']);