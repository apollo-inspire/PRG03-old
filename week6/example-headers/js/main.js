window.addEventListener('load', init);

/**
 * Initialize after DOM is loaded
 */
function init()
{
    callWebservice();
}

/**
 * Function where we will use fetch for AJAX call
 */
function callWebservice()
{
    fetch('webservice/index.php')
        .then((response) => {
            if (!response.ok) {
                console.log(response);
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(callWebserviceSuccessHandler)
        .catch(callWebserviceErrorHandler);
}

/**
 * Handler for a successfull AJAX call
 *
 * @param data
 */
function callWebserviceSuccessHandler(data)
{
    console.log('success', data);
    console.log(data.meta.message);
    let p = document.createElement('p');
    p.innerHTML = data.meta.message;
    document.getElementById('message').appendChild(p);
}

/**
 * Handler for a error in the AJAX call
 *
 * @param data
 */
function callWebserviceErrorHandler(data)
{
    console.log('error', data);
}
