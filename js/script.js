function showTab(tabId) {
    // Remove active class from all tabs and content
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Add active class to the clicked tab and corresponding content
    document.querySelector(`#tab-${tabId}`).classList.add('active');
    document.querySelectorAll('.tab-button')[tabId - 1].classList.add('active');
}