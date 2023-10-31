// let func = () => {
//     const client_id = '655ae5ebfb754857915858b35d042564';
//     const client_secret = '6bf092d07c734ab8ac8fee083bbef740';

//     const authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//         'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//     },
//     form: {
//         grant_type: 'client_credentials'
//     },
//     json: true
//     };

//     request.post(authOptions, function(error, res, body) {
//     if (!error && res.statusCode === 200) {
//         const token = body.access_token;
//     }
//     })
// }

