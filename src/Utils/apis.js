/* eslint-disable no-undef*/

// import callApi from 'Utils/request';

const endpointLocation = 'remote';

const urls = {
  remote: {
    'send-otp':'/auth.php/auth/otp/',
  }
};


function callCreateMrf(student){
  return {'status' :true}
//   callApi(getEndpoint('add-lead'), {
//     method: 'POST',
//     data: student,
//     headers: generateDefaultHeaders(),
//   });
};

export {
    callCreateMrf
};
