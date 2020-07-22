Random Sampling
====================================================



Random number generation in MXNet 
-----------------------------------


====================================  ========================================================================
:doc:`mx.rnorm <./mx.rnorm>`          Generate nomal distribution with mean and sd
:doc:`mx.runif <./mx.runif>`          Generate uniform distribution in [low, high) with specified shape
:doc:`mx.set.seed <./mx.set.seed>`    Set the seed used by mxnet device-specific random number generators
====================================  ========================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.rnorm
   mx.runif
   mx.set.seed

Random NDArrays
-----------------


==========================================================================================================  ==================================================================================================================================================
:doc:`mx.nd.normal <./mx.nd.normal>`                                                                        Draw random samples from a normal (Gaussian) distribution
:doc:`mx.nd.random.exponential <./mx.nd.random.exponential>`                                                Draw random samples from an exponential distribution
:doc:`mx.nd.random.gamma <./mx.nd.random.gamma>`                                                            Draw random samples from a gamma distribution
:doc:`mx.nd.random.generalized.negative.binomial <./mx.nd.random.generalized.negative.binomial>`            Draw random samples from a generalized negative binomial distribution
:doc:`mx.nd.random.negative.binomial <./mx.nd.random.negative.binomial>`                                    Draw random samples from a negative binomial distribution
:doc:`mx.nd.random.normal <./mx.nd.random.normal>`                                                          Draw random samples from a normal (Gaussian) distribution
:doc:`mx.nd.random.pdf.dirichlet <./mx.nd.random.pdf.dirichlet>`                                            Computes the value of the PDF of *sample* of Dirichlet distributions with parameter *alpha*
:doc:`mx.nd.random.pdf.exponential <./mx.nd.random.pdf.exponential>`                                        Computes the value of the PDF of *sample* of exponential distributions with parameters *lam* (rate)
:doc:`mx.nd.random.pdf.gamma <./mx.nd.random.pdf.gamma>`                                                    Computes the value of the PDF of *sample* of gamma distributions with parameters *alpha* (shape) and *beta* (rate)
:doc:`mx.nd.random.pdf.generalized.negative.binomial <./mx.nd.random.pdf.generalized.negative.binomial>`    Computes the value of the PDF of *sample* of generalized negative binomial distributions with parameters *mu* (mean) and *alpha* (dispersion)
:doc:`mx.nd.random.pdf.negative.binomial <./mx.nd.random.pdf.negative.binomial>`                            Computes the value of the PDF of samples of negative binomial distributions with parameters *k* (failure limit) and *p* (failure probability)
:doc:`mx.nd.random.pdf.normal <./mx.nd.random.pdf.normal>`                                                  Computes the value of the PDF of *sample* of normal distributions with parameters *mu* (mean) and *sigma* (standard deviation)
:doc:`mx.nd.random.pdf.poisson <./mx.nd.random.pdf.poisson>`                                                Computes the value of the PDF of *sample* of Poisson distributions with parameters *lam* (rate)
:doc:`mx.nd.random.pdf.uniform <./mx.nd.random.pdf.uniform>`                                                Computes the value of the PDF of *sample* of uniform distributions on the intervals given by *[low,high)*
:doc:`mx.nd.random.poisson <./mx.nd.random.poisson>`                                                        Draw random samples from a Poisson distribution
:doc:`mx.nd.random.randint <./mx.nd.random.randint>`                                                        Draw random samples from a discrete uniform distribution
:doc:`mx.nd.random.uniform <./mx.nd.random.uniform>`                                                        Draw random samples from a uniform distribution
:doc:`mx.nd.sample.exponential <./mx.nd.sample.exponential>`                                                Concurrent sampling from multiple exponential distributions with parameters lambda (rate)
:doc:`mx.nd.sample.gamma <./mx.nd.sample.gamma>`                                                            Concurrent sampling from multiple gamma distributions with parameters *alpha* (shape) and *beta* (scale)
:doc:`mx.nd.sample.generalized.negative.binomial <./mx.nd.sample.generalized.negative.binomial>`            Concurrent sampling from multiple generalized negative binomial distributions with parameters *mu* (mean) and *alpha* (dispersion)
:doc:`mx.nd.sample.multinomial <./mx.nd.sample.multinomial>`                                                Concurrent sampling from multiple multinomial distributions
:doc:`mx.nd.sample.negative.binomial <./mx.nd.sample.negative.binomial>`                                    Concurrent sampling from multiple negative binomial distributions with parameters *k* (failure limit) and *p* (failure probability)
:doc:`mx.nd.sample.normal <./mx.nd.sample.normal>`                                                          Concurrent sampling from multiple normal distributions with parameters *mu* (mean) and *sigma* (standard deviation)
:doc:`mx.nd.sample.poisson <./mx.nd.sample.poisson>`                                                        Concurrent sampling from multiple Poisson distributions with parameters lambda (rate)
:doc:`mx.nd.sample.uniform <./mx.nd.sample.uniform>`                                                        Concurrent sampling from multiple uniform distributions on the intervals given by *[low,high)*
:doc:`mx.nd.uniform <./mx.nd.uniform>`                                                                      Draw random samples from a uniform distribution
==========================================================================================================  ==================================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.normal
   mx.nd.random.exponential
   mx.nd.random.gamma
   mx.nd.random.generalized.negative.binomial
   mx.nd.random.negative.binomial
   mx.nd.random.normal
   mx.nd.random.pdf.dirichlet
   mx.nd.random.pdf.exponential
   mx.nd.random.pdf.gamma
   mx.nd.random.pdf.generalized.negative.binomial
   mx.nd.random.pdf.negative.binomial
   mx.nd.random.pdf.normal
   mx.nd.random.pdf.poisson
   mx.nd.random.pdf.uniform
   mx.nd.random.poisson
   mx.nd.random.randint
   mx.nd.random.uniform
   mx.nd.sample.exponential
   mx.nd.sample.gamma
   mx.nd.sample.generalized.negative.binomial
   mx.nd.sample.multinomial
   mx.nd.sample.negative.binomial
   mx.nd.sample.normal
   mx.nd.sample.poisson
   mx.nd.sample.uniform
   mx.nd.uniform

Random Symbols
------------------


==================================================================================================================  ==================================================================================================================================================
:doc:`mx.symbol.random_exponential <./mx.symbol.random_exponential>`                                                Draw random samples from an exponential distribution
:doc:`mx.symbol.random_gamma <./mx.symbol.random_gamma>`                                                            Draw random samples from a gamma distribution
:doc:`mx.symbol.random_generalized_negative_binomial <./mx.symbol.random_generalized_negative_binomial>`            Draw random samples from a generalized negative binomial distribution
:doc:`mx.symbol.random_negative_binomial <./mx.symbol.random_negative_binomial>`                                    Draw random samples from a negative binomial distribution
:doc:`mx.symbol.random_normal <./mx.symbol.random_normal>`                                                          Draw random samples from a normal (Gaussian) distribution
:doc:`mx.symbol.random_pdf_dirichlet <./mx.symbol.random_pdf_dirichlet>`                                            Computes the value of the PDF of *sample* of Dirichlet distributions with parameter *alpha*
:doc:`mx.symbol.random_pdf_exponential <./mx.symbol.random_pdf_exponential>`                                        Computes the value of the PDF of *sample* of exponential distributions with parameters *lam* (rate)
:doc:`mx.symbol.random_pdf_gamma <./mx.symbol.random_pdf_gamma>`                                                    Computes the value of the PDF of *sample* of gamma distributions with parameters *alpha* (shape) and *beta* (rate)
:doc:`mx.symbol.random_pdf_generalized_negative_binomial <./mx.symbol.random_pdf_generalized_negative_binomial>`    Computes the value of the PDF of *sample* of generalized negative binomial distributions with parameters *mu* (mean) and *alpha* (dispersion)
:doc:`mx.symbol.random_pdf_negative_binomial <./mx.symbol.random_pdf_negative_binomial>`                            Computes the value of the PDF of samples of negative binomial distributions with parameters *k* (failure limit) and *p* (failure probability)
:doc:`mx.symbol.random_pdf_normal <./mx.symbol.random_pdf_normal>`                                                  Computes the value of the PDF of *sample* of normal distributions with parameters *mu* (mean) and *sigma* (standard deviation)
:doc:`mx.symbol.random_pdf_poisson <./mx.symbol.random_pdf_poisson>`                                                Computes the value of the PDF of *sample* of Poisson distributions with parameters *lam* (rate)
:doc:`mx.symbol.random_pdf_uniform <./mx.symbol.random_pdf_uniform>`                                                Computes the value of the PDF of *sample* of uniform distributions on the intervals given by *[low,high)*
:doc:`mx.symbol.random_poisson <./mx.symbol.random_poisson>`                                                        Draw random samples from a Poisson distribution
:doc:`mx.symbol.random_randint <./mx.symbol.random_randint>`                                                        Draw random samples from a discrete uniform distribution
:doc:`mx.symbol.random_uniform <./mx.symbol.random_uniform>`                                                        Draw random samples from a uniform distribution
:doc:`mx.symbol.sample_exponential <./mx.symbol.sample_exponential>`                                                Concurrent sampling from multiple exponential distributions with parameters lambda (rate)
:doc:`mx.symbol.sample_gamma <./mx.symbol.sample_gamma>`                                                            Concurrent sampling from multiple gamma distributions with parameters *alpha* (shape) and *beta* (scale)
:doc:`mx.symbol.sample_generalized_negative_binomial <./mx.symbol.sample_generalized_negative_binomial>`            Concurrent sampling from multiple generalized negative binomial distributions with parameters *mu* (mean) and *alpha* (dispersion)
:doc:`mx.symbol.sample_multinomial <./mx.symbol.sample_multinomial>`                                                Concurrent sampling from multiple multinomial distributions
:doc:`mx.symbol.sample_negative_binomial <./mx.symbol.sample_negative_binomial>`                                    Concurrent sampling from multiple negative binomial distributions with parameters *k* (failure limit) and *p* (failure probability)
:doc:`mx.symbol.sample_normal <./mx.symbol.sample_normal>`                                                          Concurrent sampling from multiple normal distributions with parameters *mu* (mean) and *sigma* (standard deviation)
:doc:`mx.symbol.sample_poisson <./mx.symbol.sample_poisson>`                                                        Concurrent sampling from multiple Poisson distributions with parameters lambda (rate)
:doc:`mx.symbol.sample_uniform <./mx.symbol.sample_uniform>`                                                        Concurrent sampling from multiple uniform distributions on the intervals given by *[low,high)*
:doc:`mx.symbol.uniform <./mx.symbol.uniform>`                                                                      Draw random samples from a uniform distribution
==================================================================================================================  ==================================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.random_exponential
   mx.symbol.random_gamma
   mx.symbol.random_generalized_negative_binomial
   mx.symbol.random_negative_binomial
   mx.symbol.random_normal
   mx.symbol.random_pdf_dirichlet
   mx.symbol.random_pdf_exponential
   mx.symbol.random_pdf_gamma
   mx.symbol.random_pdf_generalized_negative_binomial
   mx.symbol.random_pdf_negative_binomial
   mx.symbol.random_pdf_normal
   mx.symbol.random_pdf_poisson
   mx.symbol.random_pdf_uniform
   mx.symbol.random_poisson
   mx.symbol.random_randint
   mx.symbol.random_uniform
   mx.symbol.sample_exponential
   mx.symbol.sample_gamma
   mx.symbol.sample_generalized_negative_binomial
   mx.symbol.sample_multinomial
   mx.symbol.sample_negative_binomial
   mx.symbol.sample_normal
   mx.symbol.sample_poisson
   mx.symbol.sample_uniform
   mx.symbol.uniform

