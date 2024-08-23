export const getUserDetails = async () => {
    const response = await fetch('/api/auth/me', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user details');
    }

    return await response.json();
};
