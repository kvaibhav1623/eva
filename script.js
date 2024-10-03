document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const inputField = document.getElementById('input-field');
    const sendButton = document.getElementById('send-btn');
    const buttons = document.querySelectorAll('.table');
    const evaButton = document.getElementById('eva-btn');
    const card = document.getElementById('eva-card');
    const closeButton = document.getElementById('close-btn');
    const attachButton = document.getElementById('attach-btn');
    const fileInput = document.getElementById('file-input');

    // Toggle the card visibility when EVA button is clicked
    evaButton.addEventListener('click', () => {
        if (card.classList.contains('show')) {
            card.classList.remove('show');  // Close the card if it's open
        } else {
            card.classList.add('show');     // Open the card if it's closed
        }
    });

    // Close the card when the close button is clicked
    closeButton.addEventListener('click', () => {
        card.classList.remove('show');
    });

    // Append the message to the chat box
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const response = button.textContent;
            appendMessage(response, 'user');
        });
    });

    sendButton.addEventListener('click', () => {
        const userInput = inputField.value.trim();
        if (userInput) {
            appendMessage(userInput, 'user');
            inputField.value = '';
        }
    });

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const userInput = inputField.value.trim();
            if (userInput) {
                appendMessage(userInput, 'user');
                inputField.value = '';
            }
        }
    });

    // Trigger file input when the attach button is clicked
    attachButton.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            appendMessage(`File attached: ${file.name}`, 'user');
        }
    });

    // Function to append message in the chat
    function appendMessage(message, sender) {
        const messageElement = document.createElement('p');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
