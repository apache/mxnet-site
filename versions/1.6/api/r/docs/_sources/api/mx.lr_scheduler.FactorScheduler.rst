

``mx.lr_scheduler.FactorScheduler``
======================================================================

Description
----------------------

Learning rate scheduler. Reduction based on a factor value.

Usage
----------

.. code:: r

	mx.lr_scheduler.FactorScheduler(

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
| ``step``                               | (integer).                                                 |
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


