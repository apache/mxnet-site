.. raw:: html



``mx.nd.sigmoid``
==================================

Description
----------------------

Computes sigmoid of x element-wise.

.. math::

   y = 1 / (1 + exp(-x))

The storage type of ``sigmoid`` output is always dense





Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_basic.cc#L101


.. disqus::
   :disqus_identifier: mx.nd.sigmoid
