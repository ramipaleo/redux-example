// Increment
function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}

// Add comment
function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}