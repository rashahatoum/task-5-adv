import type { ShadowCircleProps } from '../../interfaces';
import './ShadowCircle.css'


const ShadowCircle = ({ className = "" }: ShadowCircleProps) => {
    return (
        <div
            className={`shadow rounded-circle position-absolute border-0 ${className} z-3`}
        ></div>
    );
};

export default ShadowCircle;