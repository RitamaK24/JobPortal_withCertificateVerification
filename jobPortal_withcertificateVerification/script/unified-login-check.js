// Unified Login Checker - Include in all pages
(function() {
    // Check if user is already logged in
    const checkUnifiedLogin = () => {
        const session = localStorage.getItem('userSession');
        
        if (session) {
            try {
                const sessionData = JSON.parse(session);
                const now = new Date();
                const expiry = new Date(sessionData.expiryTime);
                
                // Check if session is still valid
                if (now < expiry) {
                    // User is logged in - show user info
                    updateUIForLoggedInUser(sessionData);
                    return true;
                }
            } catch (error) {
                console.error('Session parse error:', error);
            }
        }
        
        return false;
    };
    
    // Update UI for logged in user
    const updateUIForLoggedInUser = (sessionData) => {
        // Update navigation
        const loginBtn = document.getElementById('nav-login');
        const logoutBtn = document.getElementById('nav-logout');
        
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) {
            logoutBtn.style.display = 'block';
            logoutBtn.textContent = sessionData.userData.studentName || sessionData.userData.name || '👤';
        }
        
        // Show welcome message if on dashboard
        const welcomeMsg = document.getElementById('welcomeMessage');
        if (welcomeMsg) {
            welcomeMsg.textContent = `Welcome back, ${sessionData.userData.studentName || sessionData.userData.name}!`;
        }
    };
    
    // Listen for storage changes (login in another tab)
    window.addEventListener('storage', (e) => {
        if (e.key === 'userSession') {
            checkUnifiedLogin();
        }
    });
    
    // Check on page load
    document.addEventListener('DOMContentLoaded', checkUnifiedLogin);
    
    // Export for use in other scripts
    window.unifiedAuth = {
        isLoggedIn: checkUnifiedLogin,
        updateUI: updateUIForLoggedInUser
    };
})();