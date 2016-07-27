/**
 * Created by lixd on 16/7/27.
 */
let Util = {
    get:(url, successCallback, failCallback)=>{
        fetch(url)
        .then( (response) => response.text())
        .then( (responseText)=> {
                successCallback(JSON.parse(responseText));
            }).catch( (err) => {
                failCallback(err);
            });
    },

    gets:(url, successCallback, failCallback) =>{
        var request = new XMLHttpRequest();

        request.onreadystatechange = (e)=>{
            if(request.readyState !== 4){
                return;
            }

            if(request.status === 200){
                successCallback(JSON.parse(request.responseText));
            } else {
                console.error('xml request error');
            }
        };

        request.open('GET', url);

        request.send();

    }
}

export default Util;