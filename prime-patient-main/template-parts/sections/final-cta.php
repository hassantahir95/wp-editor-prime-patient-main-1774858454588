<?php
/**
 * Final CTA Section (includes footer)
 * 
 * @package prime-patient-main
 */
?>

<!-- Final CTA -->
<section class="bg-primary noise-overlay relative overflow-hidden">
    <!-- Animated background orbs -->
    <div class="absolute top-0 left-[5%] w-72 h-72 rounded-full bg-accent/8 blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-0 right-[5%] w-96 h-96 rounded-full bg-accent/6 blur-[150px] animate-pulse" style="animation-delay: 3s;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-pulse" style="animation-delay: 1.5s;"></div>

    <div class="section-container relative z-[2] py-20 md:py-28">
        <!-- Stats Row -->
        <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
                <?php
                $stats = array(
                    array('icon' => 'calendar', 'value' => '15–25', 'label' => 'Monthly Consults'),
                    array('icon' => 'shield', 'value' => '<15%', 'label' => 'No-Show Rate'),
                    array('icon' => 'users', 'value' => '87%', 'label' => 'Avg Show Rate'),
                );
                
                foreach ($stats as $index => $stat) : 
                    $delay = $index * 150;
                ?>
                    <div class="flex items-center gap-3" style="animation-delay: <?php echo $delay; ?>ms;">
                        <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <?php echo theme_icon($stat['icon'], 'w-5 h-5 text-accent'); ?>
                        </div>
                        <div>
                            <p class="text-lg md:text-xl font-heading font-bold text-white"><?php echo esc_html($stat['value']); ?></p>
                            <p class="text-[10px] uppercase tracking-wider text-white/40"><?php echo esc_html($stat['label']); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Headline -->
        <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div class="text-center max-w-2xl mx-auto">
                <div class="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
                    <?php echo theme_icon('sparkles', 'w-3.5 h-3.5 text-accent'); ?>
                    <span class="text-[11px] font-bold text-accent uppercase tracking-wider">Limited Availability</span>
                </div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 text-white leading-tight">
                    Your next 20 consultations are waiting
                </h2>
                <p class="text-sm md:text-base text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
                    Apply now to see if we can onboard your practice with local market exclusivity this month.
                </p>

                <!-- CTA Button -->
                <button class="cta-button group text-xs md:text-base px-6 md:px-10 py-3 md:py-4 mb-5 whitespace-nowrap hover:scale-105 transition-transform">
                    Apply To Get Booked Consults
                    <?php echo theme_icon('arrow-right', 'inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform'); ?>
                </button>

                <div class="flex items-center justify-center gap-2 text-[11px] text-white/30">
                    <?php echo theme_icon('lock', 'w-3 h-3'); ?>
                    <span>1 practice per local area · Market exclusivity applies</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="relative overflow-hidden" style="background: hsl(219 71% 10%);">
    <div class="gradient-divider"></div>
    <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700">
        <div class="section-container relative z-[2] text-center py-10">
            <div class="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                <span class="text-accent font-heading font-bold text-sm">RE</span>
            </div>
            <p class="font-heading text-base font-semibold mb-3 text-white/90">Radiant Edge Marketing</p>
            <p class="text-xs text-white/30 mb-4">&copy; <?php echo date('Y'); ?> Radiant Edge Marketing. All rights reserved.</p>
            <div class="flex items-center justify-center gap-4 text-[11px] text-white/25">
                <a href="#" class="hover:text-white/50 transition-colors">Privacy Policy</a>
                <span class="text-white/10">|</span>
                <a href="#" class="hover:text-white/50 transition-colors">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>
