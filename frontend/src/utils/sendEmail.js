import emailjs from '@emailjs/browser';

export const sendEmail = async (email, message, subject, successMessage, dispatch) => {
    var templateParams = {
        email: email,
        message: message,
        subject: subject
    };
    
    emailjs.send('service_npzjtpg', 'template_w97jtjv', templateParams, 'uF6OeJEqNkVC7B5mC')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           let output = {
            success: true,
            message: successMessage
          }
          dispatch({
            type: "SendingLinkSuccess",
            payload: output,
          });

        }, function(error) {
           console.log('FAILED...', error);
           dispatch({
            type: "SendingLinkFailure",
            payload: error.response.data,
          });
        });
}
