import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    icon,
    className,
    containerClassName,
    ...props
}) => {
    return (
        <div className={`space-y-1.5 ${containerClassName || ''}`}>
            {label && (
                <label className="text-sm font-bold text-gray-700 italic block">
                    {label}
                </label>
            )}
            <div className="relative group">
                {icon && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                        {icon}
                    </span>
                )}
                <input
                    className={`
                        w-full h-14 bg-gray-50 rounded-2xl border-2 transition-all outline-none font-bold italic text-sm
                        ${icon ? 'pl-11 pr-4' : 'px-4'}
                        ${error ? 'border-red-400 focus:border-red-500' : 'border-transparent focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/5'}
                        ${className || ''}
                    `}
                    {...props}
                />
            </div>
            {error && <span className="text-[10px] font-black text-red-500 uppercase tracking-widest italic">{error}</span>}
        </div>
    );
};
