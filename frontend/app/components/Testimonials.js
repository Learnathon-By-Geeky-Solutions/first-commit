import React, { useState, useEffect } from 'react';
import testimonials from './data/testimonials';

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const cardsPerView = 3;
    const maxSlides = testimonials.length - cardsPerView;

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused) handleNext();
        }, 3000);

        return () => clearInterval(timer);
    }, [currentSlide, isPaused]);

    const handleNext = () => {
        setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12 relative text-white">
            <h2 className="text-4xl font-extrabold text-center mb-6">Why People Love DocNest</h2>
            <p className="text-center text-gray-200 mb-8 max-w-2xl mx-auto">
                Thousands trust DocNest for its seamless healthcare experience, 24/7 accessibility,
                and user-friendly interface. See why our users recommend us.
            </p>

            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform ease-in-out duration-700"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-1/3 flex-shrink-0 px-4"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div className="p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md transition-transform transform hover:scale-105 cursor-default">
                                    <p className="text-lg italic text-white">"{testimonial.text}"</p>
                                    <div className="mt-4">
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicator Dots */}
                <div className="flex justify-center mt-6 gap-2">
                    {[...Array(maxSlides + 1)].map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 
                            ${currentSlide === index ? 'bg-blue-400 scale-110' : 'bg-gray-500'}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
