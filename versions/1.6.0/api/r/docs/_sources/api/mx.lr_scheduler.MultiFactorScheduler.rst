

``mx.lr_scheduler.MultiFactorScheduler``
================================================================================

Description
----------------------

Multifactor learning rate scheduler. Reduction based on a factor value at different steps.

Usage
----------

.. code:: r

	mx.lr_scheduler.MultiFactorScheduler(

	  step,

	  factor_val,

	  stop_factor_lr = 1e-08,

	  verbose = TRUE

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``step``                               | (array of integer).                                        |
|                                        |                                                            |
|                                        | Schedule learning rate after n updates                     |
+----------------------------------------+------------------------------------------------------------+
| ``factor``                             | (double).                                                  |
|                                        |                                                            |
|                                        | The factor for reducing the learning rate                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

scheduler function


