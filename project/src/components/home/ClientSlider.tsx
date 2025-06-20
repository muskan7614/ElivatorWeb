import React from 'react';
import UrbanLift from '../../Assets/UrbanLift.jpg'
import TechCorp from '../../Assets/TechCorp.jpg'
import BuildMax from '../../Assets/BuildMax.jpg'
import MetroHomes from '../../Assets/MetroHomes.jpg'
import SkyTower from '../../Assets/SkyTower.jpg'
import PrimeBuild from '../../Assets/PrimeBuild.jpg'
import eliteSpace from '../../Assets/EliteSpaces.jpg'
import ModernArch from '../../Assets/ModernArch.jpg'
import CityScape from '../../Assets/CityScape.png'
import NextGen from '../../Assets/NextGen.jpg'
import ProBuild from '../../Assets/Pro-Elevator.jpg'

const clients = [
  { id: 1, name: 'TechCorp', logo: TechCorp },
  { id: 2, name: 'BuildMax', logo: BuildMax },
  { id: 3, name: 'MetroHomes', logo: MetroHomes },
  { id: 4, name: 'SkyTowers', logo: SkyTower },
  { id: 5, name: 'UrbanLift', logo: UrbanLift },
  { id: 6, name: 'PrimeBuild', logo: PrimeBuild },
  { id: 7, name: 'EliteSpaces', logo: eliteSpace },
  { id: 8, name: 'ModernArch', logo: ModernArch },
  { id: 9, name: 'CityScape', logo: CityScape },
  { id: 10, name: 'NextGen', logo: NextGen },
  { id: 11, name: 'ProBuild', logo: ProBuild },
  // { id: 12, name: 'FlexConstruct', logo: 'https://via.placeholder.com/120x60/dc2626/ffffff?text=FlexConstruct' },
  // { id: 13, name: 'InnovateBuild', logo: 'https://via.placeholder.com/120x60/7c3aed/ffffff?text=InnovateBuild' },
  // { id: 14, name: 'SmartHomes', logo: 'https://via.placeholder.com/120x60/ea580c/ffffff?text=SmartHomes' },
  // { id: 15, name: 'VerticalPlus', logo: 'https://via.placeholder.com/120x60/0891b2/ffffff?text=VerticalPlus' },
  // { id: 16, name: 'TowerTech', logo: 'https://via.placeholder.com/120x60/be185d/ffffff?text=TowerTech' },
  // { id: 17, name: 'ElevateMax', logo: 'https://via.placeholder.com/120x60/16a34a/ffffff?text=ElevateMax' },
  // { id: 18, name: 'ConstructPro', logo: 'https://via.placeholder.com/120x60/ca8a04/ffffff?text=ConstructPro' },
  // { id: 19, name: 'RiseBuilders', logo: 'https://via.placeholder.com/120x60/2563eb/ffffff?text=RiseBuilders' },
  // { id: 20, name: 'HeightTech', logo: 'https://via.placeholder.com/120x60/059669/ffffff?text=HeightTech' },
];

export const ClientSlider: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to serve some of the most prestigious organizations and have built 
            lasting partnerships based on trust, quality, and reliability.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-16 bg-white rounded-lg shadow-md flex items-center justify-center border hover:border-yellow-600 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};