import React from 'react';
import { Route, Routes } from 'react-router-dom';
import featuresData from './features.json'; // Adjust the path as necessary
import FeaturePage from './FeaturePage';

const FeaturesRoutes = () => {
    return (
        <Routes>
            {featuresData.features.map(feature => (
                <Route
                    key={feature.slug}
                    path={`/oikos/features/${feature.slug}`}
                    element={<FeaturePage slug={feature.slug} />}
                />
            ))}
        </Routes>
    );
};

export default FeaturesRoutes;
