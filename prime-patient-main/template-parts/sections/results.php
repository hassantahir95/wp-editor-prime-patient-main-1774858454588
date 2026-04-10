<?php
/**
 * Results Section
 * 
 * @package prime-patient-main
 */
?>

<section class="bg-background noise-overlay relative overflow-hidden">
    <!-- Subtle accent glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none"></div>

    <div class="section-container relative z-[2] py-16 md:py-20">
        <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-12">
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Proven Results</p>
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Numbers that speak for themselves
            </h2>
            <p class="text-sm text-muted-foreground">
                Real performance metrics from practices using the Turnkey Consult system.
            </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            <?php
            $stats = array(
                array('icon' => 'calendar-check', 'value' => '2,400+', 'label' => 'Consults Booked'),
                array('icon' => 'trending-up', 'value' => '87%', 'label' => 'Average Show Rate'),
                array('icon' => 'shield-check', 'value' => '<15%', 'label' => 'No-Show Rate'),
                array('icon' => 'clock', 'value' => '7–14', 'label' => 'Days to Launch'),
            );
            
            foreach ($stats as $index => $stat) : 
                $delay = $index * 120;
            ?>
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-600 glass-card-light p-6 md:p-8 text-center group cursor-default hover:-translate-y-2" style="transition-delay: <?php echo $delay; ?>ms;">
                    <div class="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                        <?php echo theme_icon($stat['icon'], 'w-6 h-6 text-accent'); ?>
                    </div>
                    <p class="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1"><?php echo esc_html($stat['value']); ?></p>
                    <p class="text-xs text-muted-foreground uppercase tracking-wider font-medium"><?php echo esc_html($stat['label']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="gradient-divider"></div>
</section>
