// src/components/HowToUseWithImage.jsx
import React from 'react';
import { PlayCircle, Droplets, Sparkles, Sun, Moon } from 'lucide-react';


export default function HowToUseWithImage({ 
  productName = "Radiance Glow Serum",
  imageSrc = "../src/assets/Image/Image5.jpg"
}) {
  const steps = [
    {
      step: "01",
      title: "Cleanse",
      desc: "Start with clean skin using a gentle cleanser.",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Apply",
      desc: `Use 3–4 drops of <strong>${productName}</strong> and gently press into your skin.`,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Daily Routine",
      desc: "Use morning and night for best results.",
      icon: <div className="flex gap-1"><Sun className="w-5 h-5" /><Moon className="w-5 h-5" /></div>
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE — Steps */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#855d14] mb-3">
              How to Use
            </h2>
            <p className="text-gray-600 mb-10">Just three simple steps.</p>

            <div className="space-y-10">
              {steps.map((item, i) => (
                <div 
                  key={i} 
                  className="flex gap-5 items-start group"
                >
                  
                  {/* Step Number */}
                  <div className="w-14 h-14 rounded-full bg-[#e5e2d7] flex items-center justify-center font-bold text-[#855d14] text-lg shadow-sm">
                    {item.step}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#855d14] mb-1">
                      {item.title}
                    </h3>
                    <p 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>

                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-12 flex items-center gap-3 bg-[#ffffff] text-[#855d14] border-2 border-[#855d14] px-8 py-4 rounded-full font-medium hover:bg-[#6e4b10] hover:text-white transition-all shadow-md">
              <PlayCircle className="w-7 h-7" />
              Watch How It Works
            </button>
          </div>

          {/* RIGHT SIDE — Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#e5e2d7] rounded-xl blur-xl opacity-60"></div>
            <img 
              src={imageSrc}
              alt={`${productName} - How to Use`}
               className="relative rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
