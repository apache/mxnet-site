

``mx.nd.GroupNorm``
======================================

Description
----------------------

Group normalization.

The input channels are separated into ``num_groups`` groups, each containing ``num_channels / num_groups`` channels.
The mean and standard-deviation are calculated separately over the each group.

.. math::

  data = data.reshape((N, num_groups, C // num_groups, ...))
  out = \frac{data - mean(data, axis)}{\sqrt{var(data, axis) + \epsilon}} * gamma + beta

Both ``gamma`` and ``beta`` are learnable parameters.





Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``gamma``                              | NDArray-or-Symbol                                          |
|                                        | gamma array                                                |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | NDArray-or-Symbol                                          |
|                                        | beta array                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``num.groups``                         | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Total number of groups.                                    |
+----------------------------------------+------------------------------------------------------------+
| ``eps``                                | float, optional, default=9.99999975e-06.                   |
|                                        |                                                            |
|                                        | An `epsilon` parameter to prevent division by 0.           |
+----------------------------------------+------------------------------------------------------------+
| ``output.mean.var``                    | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Output the mean and std calculated along the given axis.   |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/group_norm.cc#L77

