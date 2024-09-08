(function () {
	let currentLocation = window.location.href;

	const regexYoutubeLink =
		/https:\/\/www.youtube.com\/watch\?v=[a-zA-Z0-9_-]+/g;

	// Function to fetch reactions and create or remove the UI
	function fetchAndCreateUI() {
		const matches = currentLocation.match(regexYoutubeLink);

		if (matches) {
			const videoUrlEncoded = encodeURIComponent(currentLocation);

			fetch(
				`https://youtube-extension-backend.onrender.com/reaction/${videoUrlEncoded}`
			)
				.then((response) => response.json())
				.then((data) => {
					if (data && data.reactions && data.reactions.length > 0) {
						createUI(data.reactions[0].reactionVideoLink);
					} else {
						removeUI(); // Remove the banner if no reaction is found
					}
				})
				.catch((error) => {
					console.error('Error fetching reaction data:', error);
					removeUI(); // Remove the banner in case of error
				});
		} else {
			removeUI(); // Remove the banner if the URL doesn't match
		}
	}

	// Function to create the UI with the reaction video link
	function createUI(reactionVideoLink) {
		// Remove any existing UI container to avoid duplicates
		const existingContainer = document.getElementById(
			'reaction-ui-container'
		);
		if (existingContainer) {
			existingContainer.remove();
		}

		const uiContainer = document.createElement('div');
		uiContainer.id = 'reaction-ui-container'; // Give it an ID to prevent duplicates
		uiContainer.style.position = 'fixed';
		uiContainer.style.bottom = '20px';
		uiContainer.style.right = '20px';
		uiContainer.style.backgroundColor = '#333';
		uiContainer.style.color = '#fff';
		uiContainer.style.padding = '10px';
		uiContainer.style.borderRadius = '5px';
		uiContainer.style.zIndex = '10000';

		// Create the clickable link
		const linkElement = document.createElement('a');
		linkElement.href = reactionVideoLink;
		linkElement.textContent = 'Click to Watch Reaction by Papaplatte';
		linkElement.style.color = '#FFFFFF';
		linkElement.style.textDecoration = 'none';
		linkElement.target = '_blank';

		// Add the link to the UI container
		uiContainer.appendChild(linkElement);

		// Add a close button to the UI
		const closeButton = document.createElement('span');
		closeButton.textContent = ' ✖';
		closeButton.style.marginLeft = '10px';
		closeButton.style.cursor = 'pointer';
		closeButton.onclick = () => {
			uiContainer.remove();
		};

		// Add the close button to the UI
		uiContainer.appendChild(closeButton);

		// Append the UI container to the document body
		document.body.appendChild(uiContainer);
	}

	// Function to remove the UI if it exists
	function removeUI() {
		const existingContainer = document.getElementById(
			'reaction-ui-container'
		);
		if (existingContainer) {
			existingContainer.remove();
		}
	}

	// Initial fetch when the page loads
	fetchAndCreateUI();

	// Monitor for URL changes using MutationObserver
	const observer = new MutationObserver(() => {
		if (currentLocation !== window.location.href) {
			currentLocation = window.location.href;
			fetchAndCreateUI(); // Fetch and update the UI for the new video
		}
	});

	// Observe changes in the DOM to detect when the URL changes
	observer.observe(document.body, { childList: true, subtree: true });
})();
