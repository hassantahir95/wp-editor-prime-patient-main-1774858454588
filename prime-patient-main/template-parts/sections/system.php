<?php
/**
 * System Section
 * 
 * @package prime-patient-main
 */
?>

<section class="relative overflow-hidden noise-overlay">
    <!-- Background image with parallax effect -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-[-15%] bg-cover bg-center" style="background-image: url('<?php echo esc_url(theme_asset('system-parallax.jpg')); ?>');"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/80"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-[2]">
        <div class="section-container">
            <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-14">
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">The Dynamic Growth System</p>
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 text-white">
                    A consult engine designed to produce bookings, not just leads
                </h2>
                <p class="text-white/65 text-sm md:text-base">
                    Turnkey Consult connects Meta ads to an intake and confirmation flow that routes patient-ready consultations directly to your front desk.
                </p>
            </div>

            <div class="relative max-w-4xl mx-auto">
                <!-- SVG connector lines -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 900 180" preserveAspectRatio="none">
                    <line x1="180" y1="90" x2="450" y2="90" stroke="hsl(192 100% 56%)" stroke-width="2" stroke-dasharray="8 4" opacity="0.5" />
                    <line x1="450" y1="90" x2="720" y2="90" stroke="hsl(192 100% 56%)" stroke-width="2" stroke-dasharray="8 4" opacity="0.5" />
                </svg>

                <div class="grid md:grid-cols-3 gap-5 md:gap-6 relative z-10">
                    <?php
                    $pillars = array(
                        array('icon' => 'target', 'title' => 'Precision Targeting', 'desc' => 'Reach procedure-intent audiences in your market', 'chip' => 'Higher show rate'),
                        array('icon' => 'filter', 'title' => 'Intent Filtering', 'desc' => 'Reduce low-intent inquiries before they hit staff', 'chip' => 'Cleaner intake'),
                        array('icon' => 'bell', 'title' => 'Confirm & Protect', 'desc' => 'Reminders and follow-up that improve show rates', 'chip' => 'Less chasing'),
                    );
                    
                    foreach ($pillars as $index => $pillar) : 
                        $delay = $index * 150;
                    ?>
                        <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-600 glass-card p-6 md:p-7 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10" style="transition-delay: <?php echo $delay; ?>ms;">
                            <div class="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                                <?php echo theme_icon($pillar['icon'], 'w-6 h-6 text-accent'); ?>
                            </div>
                            <h3 class="font-heading text-lg font-semibold mb-2 text-white"><?php echo esc_html($pillar['title']); ?></h3>
                            <p class="text-white/60 text-sm mb-4"><?php echo esc_html($pillar['desc']); ?></p>
                            <span class="inline-block text-[11px] bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold"><?php echo esc_html($pillar['chip']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
