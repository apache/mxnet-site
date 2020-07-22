Optimization
====================================================

Initialize and update model weights during training
--------------------------------------------------------------



Optimizers
---------------------------


==================================================  =======================================================================================================
:doc:`mx.opt.adadelta <./mx.opt.adadelta>`          Create an AdaDelta optimizer with respective parameters
:doc:`mx.opt.adagrad <./mx.opt.adagrad>`            Create an AdaGrad optimizer with respective parameters
:doc:`mx.opt.adam <./mx.opt.adam>`                  Create an Adam optimizer with respective parameters
:doc:`mx.opt.create <./mx.opt.create>`              Create an optimizer by name and parameters
:doc:`mx.opt.get.updater <./mx.opt.get.updater>`    Get an updater closure that can take list of weight and gradient and return updated list of weight
:doc:`mx.opt.nag <./mx.opt.nag>`                    Create a Nesterov Accelerated SGD( NAG) optimizer
:doc:`mx.opt.rmsprop <./mx.opt.rmsprop>`            Create an RMSProp optimizer with respective parameters
:doc:`mx.opt.sgd <./mx.opt.sgd>`                    Create an SGD optimizer with respective parameters
==================================================  =======================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.opt.adadelta
   mx.opt.adagrad
   mx.opt.adam
   mx.opt.create
   mx.opt.get.updater
   mx.opt.nag
   mx.opt.rmsprop
   mx.opt.sgd

Initialization
---------------------------


==============================================================  =================================================================================
:doc:`mx.init.Xavier <./mx.init.Xavier>`                        Xavier initializer
:doc:`mx.init.create <./mx.init.create>`                        Create initialization of argument  like arg.array
:doc:`mx.init.internal.default <./mx.init.internal.default>`    Internal default value initialization scheme
:doc:`mx.init.normal <./mx.init.normal>`                        Create a initializer that initialize the weight with normal(0, sd)
:doc:`mx.init.uniform <./mx.init.uniform>`                      Create a initializer that initialize the weight with uniform [-scale, scale]
:doc:`mx.model.init.params <./mx.model.init.params>`            Parameter initialization
==============================================================  =================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.init.Xavier
   mx.init.create
   mx.init.internal.default
   mx.init.normal
   mx.init.uniform
   mx.model.init.params

Learning rate schedule
---------------------------


======================================================================================  ========================================
:doc:`mx.lr_scheduler.FactorScheduler <./mx.lr_scheduler.FactorScheduler>`              Learning rate scheduler
:doc:`mx.lr_scheduler.MultiFactorScheduler <./mx.lr_scheduler.MultiFactorScheduler>`    Multifactor learning rate scheduler
======================================================================================  ========================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.lr_scheduler.FactorScheduler
   mx.lr_scheduler.MultiFactorScheduler

Optimizer updates (NDArray)
------------------------------------------


============================================================================================  ============================================================================================================================================================
:doc:`mx.nd.adam.update <./mx.nd.adam.update>`                                                Update function for Adam optimizer
:doc:`mx.nd.all.finite <./mx.nd.all.finite>`                                                  Check if all the float numbers in the array are finite (used for AMP)
:doc:`mx.nd.ftml.update <./mx.nd.ftml.update>`                                                The FTML optimizer described in *FTML - Follow the Moving Leader in Deep Learning*, available at http://proceedings.mlr.press/v70/zheng17a/zheng17a.pdf
:doc:`mx.nd.ftrl.update <./mx.nd.ftrl.update>`                                                Update function for Ftrl optimizer
:doc:`mx.nd.lamb.update.phase1 <./mx.nd.lamb.update.phase1>`                                  Phase I of lamb update it performs the following operations and returns g:
:doc:`mx.nd.lamb.update.phase2 <./mx.nd.lamb.update.phase2>`                                  Phase II of lamb update it performs the following operations and updates grad
:doc:`mx.nd.mp.lamb.update.phase1 <./mx.nd.mp.lamb.update.phase1>`                            Mixed Precision version of Phase I of lamb update it performs the following operations and returns g:
:doc:`mx.nd.mp.lamb.update.phase2 <./mx.nd.mp.lamb.update.phase2>`                            Mixed Precision version Phase II of lamb update it performs the following operations and updates grad
:doc:`mx.nd.mp.nag.mom.update <./mx.nd.mp.nag.mom.update>`                                    Update function for multi-precision Nesterov Accelerated Gradient( NAG) optimizer
:doc:`mx.nd.mp.sgd.mom.update <./mx.nd.mp.sgd.mom.update>`                                    Updater function for multi-precision sgd optimizer
:doc:`mx.nd.mp.sgd.update <./mx.nd.mp.sgd.update>`                                            Updater function for multi-precision sgd optimizer
:doc:`mx.nd.multi.all.finite <./mx.nd.multi.all.finite>`                                      Check if all the float numbers in all the arrays are finite (used for AMP)
:doc:`mx.nd.multi.mp.sgd.mom.update <./mx.nd.multi.mp.sgd.mom.update>`                        Momentum update function for multi-precision Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.nd.multi.mp.sgd.update <./mx.nd.multi.mp.sgd.update>`                                Update function for multi-precision Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.nd.multi.sgd.mom.update <./mx.nd.multi.sgd.mom.update>`                              Momentum update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.nd.multi.sgd.update <./mx.nd.multi.sgd.update>`                                      Update function for Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.nd.nag.mom.update <./mx.nd.nag.mom.update>`                                          Update function for Nesterov Accelerated Gradient( NAG) optimizer
:doc:`mx.nd.preloaded.multi.mp.sgd.mom.update <./mx.nd.preloaded.multi.mp.sgd.mom.update>`    Momentum update function for multi-precision Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.nd.preloaded.multi.mp.sgd.update <./mx.nd.preloaded.multi.mp.sgd.update>`            Update function for multi-precision Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.nd.preloaded.multi.sgd.mom.update <./mx.nd.preloaded.multi.sgd.mom.update>`          Momentum update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.nd.preloaded.multi.sgd.update <./mx.nd.preloaded.multi.sgd.update>`                  Update function for Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.nd.rmsprop.update <./mx.nd.rmsprop.update>`                                          Update function for `RMSProp` optimizer
:doc:`mx.nd.rmspropalex.update <./mx.nd.rmspropalex.update>`                                  Update function for RMSPropAlex optimizer
:doc:`mx.nd.sgd.mom.update <./mx.nd.sgd.mom.update>`                                          Momentum update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.nd.sgd.update <./mx.nd.sgd.update>`                                                  Update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.nd.signsgd.update <./mx.nd.signsgd.update>`                                          Update function for SignSGD optimizer
:doc:`mx.nd.signum.update <./mx.nd.signum.update>`                                            SIGN momentUM (Signum) optimizer
============================================================================================  ============================================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.adam.update
   mx.nd.all.finite
   mx.nd.ftml.update
   mx.nd.ftrl.update
   mx.nd.lamb.update.phase1
   mx.nd.lamb.update.phase2
   mx.nd.mp.lamb.update.phase1
   mx.nd.mp.lamb.update.phase2
   mx.nd.mp.nag.mom.update
   mx.nd.mp.sgd.mom.update
   mx.nd.mp.sgd.update
   mx.nd.multi.all.finite
   mx.nd.multi.mp.sgd.mom.update
   mx.nd.multi.mp.sgd.update
   mx.nd.multi.sgd.mom.update
   mx.nd.multi.sgd.update
   mx.nd.nag.mom.update
   mx.nd.preloaded.multi.mp.sgd.mom.update
   mx.nd.preloaded.multi.mp.sgd.update
   mx.nd.preloaded.multi.sgd.mom.update
   mx.nd.preloaded.multi.sgd.update
   mx.nd.rmsprop.update
   mx.nd.rmspropalex.update
   mx.nd.sgd.mom.update
   mx.nd.sgd.update
   mx.nd.signsgd.update
   mx.nd.signum.update

Optimizer updates (Symbol)
------------------------------------------


====================================================================================================  ============================================================================================================================================================
:doc:`mx.symbol.adam_update <./mx.symbol.adam_update>`                                                Update function for Adam optimizer
:doc:`mx.symbol.all_finite <./mx.symbol.all_finite>`                                                  Check if all the float numbers in the array are finite (used for AMP)
:doc:`mx.symbol.ftml_update <./mx.symbol.ftml_update>`                                                The FTML optimizer described in *FTML - Follow the Moving Leader in Deep Learning*, available at http://proceedings.mlr.press/v70/zheng17a/zheng17a.pdf
:doc:`mx.symbol.ftrl_update <./mx.symbol.ftrl_update>`                                                Update function for Ftrl optimizer
:doc:`mx.symbol.mp_sgd_mom_update <./mx.symbol.mp_sgd_mom_update>`                                    Updater function for multi-precision sgd optimizer
:doc:`mx.symbol.mp_sgd_update <./mx.symbol.mp_sgd_update>`                                            Updater function for multi-precision sgd optimizer
:doc:`mx.symbol.multi_all_finite <./mx.symbol.multi_all_finite>`                                      Check if all the float numbers in all the arrays are finite (used for AMP)
:doc:`mx.symbol.multi_mp_sgd_mom_update <./mx.symbol.multi_mp_sgd_mom_update>`                        Momentum update function for multi-precision Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.symbol.multi_mp_sgd_update <./mx.symbol.multi_mp_sgd_update>`                                Update function for multi-precision Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.symbol.multi_sgd_mom_update <./mx.symbol.multi_sgd_mom_update>`                              Momentum update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.symbol.multi_sgd_update <./mx.symbol.multi_sgd_update>`                                      Update function for Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.symbol.preloaded_multi_mp_sgd_mom_update <./mx.symbol.preloaded_multi_mp_sgd_mom_update>`    Momentum update function for multi-precision Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.symbol.preloaded_multi_mp_sgd_update <./mx.symbol.preloaded_multi_mp_sgd_update>`            Update function for multi-precision Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.symbol.preloaded_multi_sgd_mom_update <./mx.symbol.preloaded_multi_sgd_mom_update>`          Momentum update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.symbol.preloaded_multi_sgd_update <./mx.symbol.preloaded_multi_sgd_update>`                  Update function for Stochastic Gradient Descent (SDG) optimizer
:doc:`mx.symbol.sgd_mom_update <./mx.symbol.sgd_mom_update>`                                          Momentum update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.symbol.sgd_update <./mx.symbol.sgd_update>`                                                  Update function for Stochastic Gradient Descent (SGD) optimizer
:doc:`mx.symbol.signsgd_update <./mx.symbol.signsgd_update>`                                          Update function for SignSGD optimizer
:doc:`mx.symbol.signum_update <./mx.symbol.signum_update>`                                            SIGN momentUM (Signum) optimizer
====================================================================================================  ============================================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.adam_update
   mx.symbol.all_finite
   mx.symbol.ftml_update
   mx.symbol.ftrl_update
   mx.symbol.mp_sgd_mom_update
   mx.symbol.mp_sgd_update
   mx.symbol.multi_all_finite
   mx.symbol.multi_mp_sgd_mom_update
   mx.symbol.multi_mp_sgd_update
   mx.symbol.multi_sgd_mom_update
   mx.symbol.multi_sgd_update
   mx.symbol.preloaded_multi_mp_sgd_mom_update
   mx.symbol.preloaded_multi_mp_sgd_update
   mx.symbol.preloaded_multi_sgd_mom_update
   mx.symbol.preloaded_multi_sgd_update
   mx.symbol.sgd_mom_update
   mx.symbol.sgd_update
   mx.symbol.signsgd_update
   mx.symbol.signum_update

