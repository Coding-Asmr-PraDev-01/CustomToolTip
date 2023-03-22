(function(){
    let links = document.links;
    for(let i = 0; i < links.length; i++){
        let aLink = links[i];
        if(aLink.title !== ""){
            aLink.addEventListener('mouseover', createToolTip);
            aLink.addEventListener('mouseout', cancelToolTip);
        }
    }   

    function createToolTip(e){
        let title = this.title;
        this.title = "";
        let padding = 90;
        this.setAttribute("tooltip", title);
        let wrapperContainer = document.createElement('div');
        wrapperContainer.className = "tooltip";
        wrapperContainer.appendChild(document.createTextNode(title));
        let firstChild = document.body.firstChild;
        firstChild.parentNode.insertBefore(wrapperContainer, firstChild); 
        let linkProperties = this.getBoundingClientRect();
        
        // get Tooltip wrapper properties
        let toolTipProps = wrapperContainer.getBoundingClientRect();
        let topPosition = linkProperties.bottom - (toolTipProps.height + padding);
        wrapperContainer.setAttribute('style', `bottom: ${topPosition}px; left: ${linkProperties.left - (toolTipProps.width / 2) + (padding / 3)}px;`);   
        console.log(toolTipProps)
    }

    function cancelToolTip(e){
        let title = this.getAttribute('tooltip');
        this.title = title;
        this.removeAttribute('tooltip');
        document.querySelector('.tooltip').remove();
    }

})();