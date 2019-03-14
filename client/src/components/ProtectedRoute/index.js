import React from 'react';

import ProtectedRoute from './ProtectedRoute';

export default props => <ProtectedRoute isAuthenticated={false} {...props} />;