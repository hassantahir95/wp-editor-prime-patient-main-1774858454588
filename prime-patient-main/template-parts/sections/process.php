<?php
/**
 * Process Section
 * 
 * @package prime-patient-main
 */
?>

<section class="bg-secondary noise-overlay relative">
    <div class="section-container relative z-[2]">
        <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">How It Works</p>
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                A simple rollout that protects your time
            </h2>
        </div>

        <div class="relative max-w-4xl mx-auto">
            <!-- Timeline line -->
            <div class="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-border -translate-y-1/2 z-0">
                <div class="h-full bg-gradient-to-r from-accent to-accent/30" style="transform-origin: left;"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
                <?php
                $steps = array(
                    array(
                        'icon' => 'map',
                        'title' => 'Market & Offer Mapping',
                        'desc' => 'Align procedures, pricing, and qualification criteria',
                        'you_do' => 'Share your top procedures and ideal patient',
                        'we_do' => 'Build targeting and qualifying criteria'
                    ),
                    array(
                        'icon' => 'megaphone',
                        'title' => 'Meta Ads Launch',
                        'desc' => 'High-quality Meta ads with procedure-intent messaging',
                        'you_do' => 'Approve creative and offer direction',
                        'we_do' => 'Build and launch campaigns'
                    ),
                    array(
                        'icon' => 'calendar-check',
                        'title' => 'Booking & Confirmation',
                        'desc' => 'Intake, routing, reminders, and staff-friendly scheduling',
                        'you_do' => 'Your team takes confirmed calls',
                        'we_do' => 'Automate follow-up and reminders'
                    ),
                );
                
                foreach ($steps as $index => $step) : 
                    $delay = $index * 120;
                ?>
                    <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-600 glass-card-light p-6 text-center group relative overflow-hidden hover:-translate-y-2 hover:shadow-xl" style="transition-delay: <?php echo $delay; ?>ms;">
                        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-accent/5">
                            <span class="text-sm font-bold text-accent"><?php echo $index + 1; ?></span>
                        </div>

                        <?php echo theme_icon($step['icon'], 'w-7 h-7 text-accent mx-auto mb-2'); ?>
                        <h3 class="font-heading text-base font-semibold mb-2 text-foreground"><?php echo esc_html($step['title']); ?></h3>
                        <p class="text-muted-foreground text-xs mb-4"><?php echo esc_html($step['desc']); ?></p>

                        <div class="space-y-1.5 text-[11px]">
                            <div class="bg-secondary rounded-lg p-2.5 border border-border/50">
                                <span class="font-bold text-foreground">You:</span> 
                                <span class="text-muted-foreground"><?php echo esc_html($step['you_do']); ?></span>
                            </div>
                            <div class="bg-accent/5 rounded-lg p-2.5 border border-accent/10">
                                <span class="font-bold text-accent">We:</span> 
                                <span class="text-muted-foreground"><?php echo esc_html($step['we_do']); ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="gradient-divider mt-16"></div>
    </div>
</section>
