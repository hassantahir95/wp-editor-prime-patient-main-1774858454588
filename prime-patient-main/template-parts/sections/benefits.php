<?php
/**
 * Benefits Section
 * 
 * @package prime-patient-main
 */
?>

<section class="bg-background noise-overlay relative">
    <div class="section-container relative z-[2]">
        <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-12">
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">What You Get</p>
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Everything built for a busy surgical practice
            </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <?php
            $benefits = array(
                array('icon' => 'calendar-check', 'title' => 'Booked consults, not a spreadsheet of leads'),
                array('icon' => 'user-check', 'title' => 'Self-paying, procedure-seeking prospects'),
                array('icon' => 'bell-ring', 'title' => 'Reduced no-show chaos with confirmations'),
                array('icon' => 'headset', 'title' => 'Less front desk back-and-forth'),
                array('icon' => 'bar-chart-3', 'title' => 'Predictable weeks for surgery planning'),
                array('icon' => 'shield', 'title' => 'Market exclusivity: 1 practice per local area'),
            );
            
            foreach ($benefits as $index => $benefit) : 
                $delay = $index * 60;
            ?>
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-600 relative p-5 rounded-2xl border border-border bg-card overflow-hidden group cursor-default hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/5" style="transition-delay: <?php echo $delay; ?>ms;">
                    <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/15 transition-all duration-500 pointer-events-none"></div>
                    
                    <!-- Number badge -->
                    <div class="absolute top-3 right-3 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                        <span class="text-[10px] font-bold text-accent"><?php echo $index + 1; ?></span>
                    </div>

                    <div class="relative z-10 flex items-start gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                            <?php echo theme_icon($benefit['icon'], 'w-5 h-5 text-accent'); ?>
                        </div>
                        <p class="font-medium text-sm leading-relaxed text-foreground pt-1.5"><?php echo esc_html($benefit['title']); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="gradient-divider mt-16"></div>
    </div>
</section>
