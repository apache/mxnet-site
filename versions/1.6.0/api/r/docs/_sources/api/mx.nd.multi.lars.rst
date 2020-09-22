

``mx.nd.multi.lars``
========================================

Description
----------------------

Compute the LARS coefficients of multiple weights and grads from their sums of square"



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lrs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Learning rates to scale by LARS coefficient                |
+----------------------------------------+------------------------------------------------------------+
| ``weights.sum.sq``                     | NDArray-or-Symbol                                          |
|                                        | sum of square of weights arrays                            |
+----------------------------------------+------------------------------------------------------------+
| ``grads.sum.sq``                       | NDArray-or-Symbol                                          |
|                                        | sum of square of gradients arrays                          |
+----------------------------------------+------------------------------------------------------------+
| ``wds``                                | NDArray-or-Symbol                                          |
|                                        | weight decays                                              |
+----------------------------------------+------------------------------------------------------------+
| ``eta``                                | float, required.                                           |
|                                        |                                                            |
|                                        | LARS eta                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``eps``                                | float, required.                                           |
|                                        |                                                            |
|                                        | LARS eps                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``rescale.grad``                       | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Gradient rescaling factor                                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/contrib/multi_lars.cc#L37

