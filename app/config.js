/**
 * Configuration
 */
export default {

		/**
		 * Scitran
		 */
		scitran: {
			url: 'http://localhost:9876/api/'
		},

		/**
		 * CRN
		 */
		crn: {
			url: 'http://localhost:9876/crn/'
		},

		/**
		 * Authentication
		 */
		auth: {
			google: {
				clientID: process.env.SCITRAN_AUTH_CLIENT_ID
			}
		},

		/**
		 * Upload
		 */
		upload: {

			/**
			 * Filenames ignored during upload.
			 */
			blacklist: [
			    '.DS_Store',
			    'Icon\r'
			]
		}
};
