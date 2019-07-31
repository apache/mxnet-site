.. raw:: html



``mx.nd.hard.sigmoid``
============================================

Description
----------------------

Computes hard sigmoid of x element-wise.

.. math::

   y = max(0, min(1, alpha * x + beta))



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``alpha``                              | float, optional, default=0.2.                              |
|                                        |                                                            |
|                                        | Slope of hard sigmoid                                      |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | float, optional, default=0.5.                              |
|                                        |                                                            |
|                                        | Bias of hard sigmoid.                                      |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_basic.cc#L115


.. disqus::
   :disqus_identifier: mx.nd.hard.sigmoid
