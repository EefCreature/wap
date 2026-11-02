function speakText() {
            let synth = window.speechSynthesis;
            synth.cancel(); // Clear any ongoing speech
            let getText = document.getElementById('text').textContent;
            
            //Use API: Text To Speech to convert this getText to voice
            let utterance = new SpeechSynthesisUtterance(getText);
            //Adjust the speaker properties
            utterance.lang = 'en-NZ';
            utterance.pitch = 1;
            utterance.rate = 1;
            utterance.volume = 1;
            speechSynthesis.speak(utterance);
        }
//------------------------------------------
    // Load saved preferences: text size preference
    if (localStorage.getItem("size_preference") != null) {
      document.body.style.fontSize = localStorage.getItem("size_preference");
    }       
    //Change text size and save
    function customizeText() {
      let selectedTextSize = document.getElementById("sizeOption").value;
      document.body.style.fontSize = selectedTextSize;
      localStorage.setItem("size_preference", selectedTextSize);  
    }   

    //------------------------------------------
    //load color theme: dark mode or light mode
    const savedTheme = localStorage.getItem('themePreference') || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('themeToggle').checked = true;
    }
    //Toggle between Dark mode and Light mode
    function toggleMode() {
      let theme = document.getElementById("themeToggle").checked ? 'dark' : 'light';
      theme === 'dark' ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
      localStorage.setItem('themePreference', theme);       
    }   