import { withAuth } from 'next-auth/middleware';

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            if (token && token?.email) {
                return true; // If there is a token, the user is authenticated
            }
        },
    },
});
