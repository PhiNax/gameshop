document.onreadystatechange = () => {
    if (document.readyState === 'loading') {
        console.log('DOM is loading.');
    }
    else if (document.readyState === 'interactive') {
        console.log('DOM is interactive.');
    }
    else if (document.readyState === 'complete') {
        console.log('DOM is ready.');
        cb();
        console.log(cb());
    }
};

function cb() {


    function openNav() {
        document.getElementById("sidebar").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("sidebar").style.width = "0";
    }

}