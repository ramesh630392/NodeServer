export default function handler(req, res) {
    res.status(200).json({
      message: 'Welcome to the User Authentication API!',
      endpoints: {
        signup: '/api/signup',
        login: '/api/login',
      },
    });
}
