'use client';

import React from 'react';
import { toast } from 'web-haptics-toast';
import { HeroText } from '@/src/components/ui/hero-text';
import { CodeBlock } from '@/src/components/shared/code-block';
import { cn } from '@/src/lib/utils';
import {
  Check, AlertCircle, Info, AlertTriangle, Play,
  Settings2, Layout, SlidersHorizontal, Zap, Terminal,
  Cpu, MousePointer2, Layers
} from 'lucide-react';

const POSITIONS = [
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right'
] as const;

type Position = (typeof POSITIONS)[number];

export const Playground = ({
  richColors, setRichColors,
  closeButton, setCloseButton,
  expand, setExpand,
  position, setPosition,
  haptics, setHaptics,
  hapticsDebug, setHapticsDebug,
  hapticsShowSwitch, setHapticsShowSwitch,
}: any) => {

  const snippet = `
<Toaster 
  position="${position}"
  expand={${expand}}
  richColors={${richColors}}
  closeButton={${closeButton}}
  haptics={${haptics}}
  hapticsDebug={${hapticsDebug}}
  hapticsShowSwitch={${hapticsShowSwitch}}
/>
`.trim();

  const triggerToast = (type: string) => {
    switch (type) {
      case 'success': toast.success('Tactile Success!', { description: 'The vibration just feels right.' }); break;
      case 'error': toast.error('Critical Failure', { description: 'A sharp, double-pulse warning.' }); break;
      case 'info': toast.info('System Update', { description: 'Subtle selection feedback.' }); break;
      case 'warning': toast.warning('Battery Low', { description: 'A medium, caution-heavy pulse.' }); break;
      case 'action':
        toast.message('Protocol Initiated', {
          description: 'Tactile sequence in progress',
          action: { label: 'Abort', onClick: () => toast.error('Aborted') },
        });
        break;
      case 'custom':
        toast.custom((t) => (
          <div className="bg-black text-white p-4 rounded-2xl border-4 border-secondary shadow-[4px_4px_0_black] flex items-center gap-3">
            <div className="size-3 rounded-full bg-secondary animate-pulse" />
            <span className="font-black uppercase text-xs">Custom Headless Engine</span>
            <button onClick={() => toast.dismiss(t)} className="ml-auto text-[10px] bg-white/10 px-2 py-1 rounded-lg">X</button>
          </div>
        ));
        break;
      case 'promise':
        toast.promise(new Promise(res => setTimeout(res, 2000)), {
          loading: 'Processing...',
          success: 'Task finalized!',
          error: 'Error occurred',
        });
        break;
      default: toast('Default Haptic Toast', { description: 'Simple, direct feedback.' });
    }
  };

  return (
    <section id="playground" className="py-24 bg-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <HeroText className="text-5xl md:text-8xl text-primary leading-none uppercase mb-6 tracking-wide">
            PLAYGROUND
          </HeroText>
          <p className="max-w-2xl text-xl md:text-2xl font-black italic text-black/60">
            Dial in your tactical experience. <span className="text-primary">Configure the engine and feel the difference.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Configuration Station */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-4 border-primary rounded-[2.5rem] p-8 shadow-[12px_12px_0_black] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 bg-black text-white rounded-2xl shadow-[4px_4px_0_black]">
                  <Settings2 size={24} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-[1000] uppercase tracking-tighter">Configuration</h3>
              </div>

              <div className="space-y-10 flex-1">
                <div className="grid grid-cols-2 gap-3">
                  <ConfigSwitch label="Haptic Feedback" active={haptics} onClick={() => setHaptics(!haptics)} tiltClass="rotate-1" />
                  <ConfigSwitch label="Rich Colors" active={richColors} onClick={() => setRichColors(!richColors)} />
                  <ConfigSwitch label="Stack Stacks" active={expand} onClick={() => setExpand(!expand)} tiltClass="-rotate-1" />
                  <ConfigSwitch label="Manual Switch" active={hapticsShowSwitch} onClick={() => setHapticsShowSwitch(!hapticsShowSwitch)} />
                  <ConfigSwitch label="Debug Mode" active={hapticsDebug} onClick={() => setHapticsDebug(!hapticsDebug)} tiltClass="rotate-1" />
                  <ConfigSwitch label="Close X" active={closeButton} onClick={() => setCloseButton(!closeButton)} tiltClass="-rotate-2" />
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-2">
                    <Layout size={18} className="text-primary" strokeWidth={3} />
                    <span className="text-xs font-black uppercase tracking-widest text-black/40">Anchor Grid</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {POSITIONS.map((p) => (
                      <button
                        key={p}
                        onClick={() => setPosition(p)}
                        className={cn(
                          "h-12 rounded-xl border-2 border-black text-xs font-[1000] uppercase transition-all active:scale-95",
                          position === p ? "bg-primary text-white shadow-[4px_4px_0_black] -translate-y-1" : "bg-black/5 text-black/40 hover:bg-black/10"
                        )}
                      >
                        {p.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tactical Command */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-black/5 border-4 border-black rounded-[2.5rem] p-8 md:p-10 shadow-[12px_12px_0_black] relative overflow-hidden h-full flex flex-col">
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary text-black rounded-2xl shadow-[4px_4px_0_black]">
                    <Play size={24} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-[1000] uppercase tracking-tighter leading-none">Launch Center</h3>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-red-500 border-2 border-black" />
                  <div className="size-3 rounded-full bg-yellow-500 border-2 border-black" />
                  <div className="size-3 rounded-full bg-green-500 border-2 border-black" />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 relative z-10">
                <LaunchPadButton label="Success" icon={<Check size={20} />} color="secondary" onClick={() => triggerToast('success')} />
                <LaunchPadButton label="Error" icon={<AlertCircle size={20} />} color="red" onClick={() => triggerToast('error')} />
                <LaunchPadButton label="Info" icon={<Info size={20} />} color="blue" onClick={() => triggerToast('info')} />
                <LaunchPadButton label="Warning" icon={<AlertTriangle size={20} />} color="yellow" onClick={() => triggerToast('warning')} />
                <LaunchPadButton label="Custom" icon={<Cpu size={20} />} color="white" onClick={() => triggerToast('custom')} />
                <LaunchPadButton label="Action" icon={<Zap size={20} />} color="white" onClick={() => triggerToast('action')} />
              </div>

              <div className="mt-auto space-y-6 pt-5 relative z-10">
                <CodeBlock>{snippet}</CodeBlock>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const LaunchPadButton = ({ label, icon, color, onClick }: any) => {
  const colorMap: any = {
    secondary: "bg-secondary text-black",
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-400 text-black",
    primary: "bg-primary text-white",
    white: "bg-white text-black border-black/10"
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex flex-col items-center justify-center p-5 rounded-3xl border-4 border-black transition-all active:scale-95 text-center gap-3 shadow-[6px_6px_0_black]",
        colorMap[color]
      )}
    >
      <div className="transition-transform group-hover:scale-125 group-hover:rotate-6 text-current">
        {React.cloneElement(icon as any, { size: 24, strokeWidth: 3 })}
      </div>
      <span className="text-xs font-black uppercase tracking-widest">{label}</span>
    </button>
  );
};

const ConfigSwitch = ({ label, active, onClick, tiltClass }: any) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center p-4 rounded-3xl border-4 transition-all active:scale-95 text-center gap-4 h-full",
      active
        ? cn("bg-primary border-black text-white shadow-[6px_6px_0_black] -translate-y-1", tiltClass)
        : "bg-white border-black/10 text-black/20 hover:border-black/30 hover:bg-black/2 shadow-[6px_6px_0_black]"
    )}
  >
    <div className={cn(
      "size-10 rounded-xl border-4 flex items-center justify-center transition-all duration-300",
      active ? "bg-black border-black text-secondary scale-110" : "bg-black/5 border-black/10 text-transparent"
    )}>
      <Check size={20} strokeWidth={4} />
    </div>

    <span className="text-[11px] font-[1000] uppercase tracking-widest leading-tight">{label}</span>
  </button>
);
